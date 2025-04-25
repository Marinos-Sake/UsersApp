const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');

exports.options = {
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "Users and Products CRUD API",
    description: "An application for creating users and choosing product",
    contact: {
      name: "API Support",
      url: "https://aueb.gr",
      email: "support@example.com"
    }
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local Server"
    },
    {
      url: "http://www.backend.aueb.gr",
      description: "Testing server"
    }
  ],
  tags: [
    {
      name: "Users",
      description: "Endpoints for User"
    },
    {
      name: "Users and Products",
      description: "Endpoints for users and their products"
    },
    {
      name: "Auth",
      description: "Endpoints for Authentication"
    }
  ],
  components: {
    schemas: {
      User: m2s(User)
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  security: [
    { bearerAuth: [] }
  ],
  paths: {
    "/api/users": {
      get: {
        tags: ["Users"],
        description: "Returns a list of all users, required a token",
        responses: {
          "200": {
            description: "List of all users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Users"],
        description: "Data of users that we want to create",
        requestBody: {
          description: "JSON with user data",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string" },
                  password: { type: "string" },
                  name: { type: "string" },
                  surname: { type: "string" },
                  email: { type: "string" },
                  address: {
                    type: "object",
                    properties: {
                      area: { type: "string" },
                      road: { type: "string" }
                    }
                  },
                  phone: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: { type: "string" },
                        number: { type: "number" }
                      }
                    }
                  }
                },
                required: ["username", "password", "name", "surname", "email"]
              }
            }
          }
        },
        responses: {
          "200": {
            description: "JSON of new user"
          }
        }
      }
    },
    "/api/users/{username}": {
      get: {
        tags: ["Users"],
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "Username of user that we want to find",
            schema: { type: "string" }
          }
        ],
        description: "Returns users details for specific username",
        responses: {
          "200": {
            description: "User details",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          }
        }
      },
      patch: {
        tags: ["Users"],
        description: "Update user",
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "Username of user that can update",
            schema: { type: "string" }
          }
        ],
        requestBody: {
          description: "Data of user to update",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string" },
                  name: { type: "string" },
                  surname: { type: "string" },
                  email: { type: "string" },
                  address: {
                    type: "object",
                    properties: {
                      area: { type: "string" },
                      road: { type: "string" }
                    }
                  }
                },
                required: ["email"]
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Update user"
          }
        }
      },
      delete: {
        tags: ["Users"],
        description: "Delete user from DB",
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "User to delete",
            schema: { type: "string" }
          }
        ],
        responses: {
          "200": {
            description: "Delete a user"
          }
        }
      }
    },
    "/api/users/{username}/password": {
      patch: {
        tags: ["Users"],
        description: "Update the password for the specified user",
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "Username of user that can update",
            schema: { type: "string" }
          }
        ],
        requestBody: {
          description: "New password to update",
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  password: {
                    type: "string",
                    example: "newSecurePassword123"
                  }
                },
                required: ["password"]
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Password updated successfully"
          },
          "404": {
            description: "User not found"
          },
          "500": {
            description: "Internal server error"
          }
        }
      }
    },
    "/api/auth/login": {
      post: {
        tags: ["Auth"],
        description: "Login User",
        requestBody: {
          description: "User sends username and password, receives JWT token",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string" },
                  password: { type: "string" }
                },
                required: ["username", "password"]
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Token returned"
          }
        }
      }
    },
    "/api/user-product/{username}": {
      get: {
        tags: ["Users and Products"],
        parameters: [
          {
            name: "username",
            in: "path",
            required: true,
            description: "Find user and products",
            schema: { type: "string" }
          }
        ],
        responses: {
          "200": {
            description: "User and Products",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          }
        }
      }
    }
  }
};
