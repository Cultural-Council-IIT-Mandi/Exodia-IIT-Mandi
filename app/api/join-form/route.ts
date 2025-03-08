import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, college, year, message } = body;
    
    if (!name || !email || !phone || !college || !year) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }
    
    // Check if the Google Script URL is defined
    if (!process.env.GOOGLE_SCRIPT_URL) {
      throw new Error('Google Script URL is not configured');
    }
    
    // Send data to Google Apps Script
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to submit form');
    }
    
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' }, 
      { status: 500 }
    );
  }
}
