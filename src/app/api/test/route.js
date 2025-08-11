// src/app/api/test/route.js
export async function GET() {
  try {
    // Test 1: Check if we can import nodemailer
    let nodemailerStatus = 'Not installed';
    try {
      const nodemailer = await import('nodemailer');
      nodemailerStatus = 'Installed successfully';
    } catch (e) {
      nodemailerStatus = `Import failed: ${e.message}`;
    }

    // Test 2: Check environment variables
    const envStatus = {
      GMAIL_USER: process.env.GMAIL_USER ? 'Set ✓' : 'Missing ✗',
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Set ✓' : 'Missing ✗',
      RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL ? 'Set ✓' : 'Missing ✗',
    };

    return new Response(
      JSON.stringify({
        status: 'Test completed',
        nodemailer: nodemailerStatus,
        environment: envStatus,
        nodeVersion: process.version,
        timestamp: new Date().toISOString()
      }, null, 2),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Test failed',
        message: error.message,
        stack: error.stack
      }, null, 2),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}