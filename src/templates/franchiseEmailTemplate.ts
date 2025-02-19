export const franchiseEmailTemplate = {
  subject: 'New Franchise Inquiry - {{from_name}}',
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: #FF6B35;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background: #ffffff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 0 0 5px 5px;
          }
          .info-item {
            margin: 10px 0;
          }
          .label {
            font-weight: bold;
            color: #666;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Franchise Inquiry</h2>
          </div>
          <div class="content">
            <p>Dear {{to_name}},</p>
            
            <p>You have received a new franchise inquiry from {{from_name}}.</p>
            
            <div class="info-item">
              <div class="label">Contact Information:</div>
              <div>Name: {{from_name}}</div>
              <div>Email: {{from_email}}</div>
              <div>Phone: {{phone}}</div>
              <div>Preferred Location: {{location}}</div>
            </div>

            <p>Please review this inquiry and contact the potential franchisee as soon as possible.</p>
            
            <div class="footer">
              <p>This is an automated message from your Memet Kebab Franchise System</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
};
