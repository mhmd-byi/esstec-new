import {
  deleteUser,
  getUserById,
  updateUser,
} from "@/app/models/userModel";

export async function GET(req, context) {
  try {
    const userId = context.params.id;
    const user = await getUserById(userId);
    
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    
    return new Response(JSON.stringify(userWithoutPassword), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function PATCH(req, context) {
  try {
    const userData = await req.json();
    const userId = context.params.id;
    const updated = await updateUser(userId, userData);
    
    if (updated) {
      return new Response(JSON.stringify({ message: 'User updated successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function DELETE(req, context) {
  try {
    const userId = context.params.id;
    const deleted = await deleteUser(userId);
    
    if (deleted) {
      return new Response(JSON.stringify({ message: 'User deleted successfully' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
