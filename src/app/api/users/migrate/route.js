import { createUser, getUserByUsername } from "@/app/models/userModel";

export async function GET() {
  try {
    // Check if admin user already exists
    const existingAdmin = await getUserByUsername('admin');
    if (existingAdmin) {
      return new Response(JSON.stringify({ 
        message: 'Admin user already exists',
        userId: existingAdmin._id 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Create default admin user
    const adminUser = {
      username: 'admin',
      email: 'admin@esstec.com',
      password: 'Alwaysrespect1+', // This will be hashed in createUser
      role: 'admin',
      isActive: true
    };

    const userId = await createUser(adminUser);

    return new Response(JSON.stringify({ 
      message: 'Admin user created successfully',
      userId: userId,
      username: 'admin',
      email: 'admin@esstec.com'
    }), {
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
