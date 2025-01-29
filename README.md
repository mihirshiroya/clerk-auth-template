
## 🔑 Getting Your Clerk Keys

1. Create a Clerk Account:
   - Go to [Clerk.com](https://clerk.com)
   - Sign up for an account

2. Create a New Application:
   - Click "Add Application"
   - Choose "Create from scratch"

3. Get Frontend Keys:
   - Go to API Keys in Clerk Dashboard
   - Copy "Publishable Key" → `VITE_CLERK_PUBLISHABLE_KEY`

4. Get Backend Keys:
   - Copy "Secret Key" → `CLERK_SECRET_KEY`
   - Copy "Publishable Key" → `CLERK_PUBLISHABLE_KEY`

## 🗄️ MongoDB Setup

1. Create MongoDB Atlas Account:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster

2. Get Connection String:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>` with your credentials

### Setting up Webhook
1. In Clerk Dashboard, go to Webhooks
2. Create a new webhook endpoint
3. Add your endpoint URL (e.g., `https://your-domain.com/api/webhook`)
4. Select `user.created` event
5. Copy the `CLERK_WEBHOOK_SECRET`

## 🏃‍♂️ Running the Application

1. **Start the backend server**

2. **Start the frontend development server**

3. **Access the application**
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## 🔒 Authentication Flow

1. User clicks "Continue with Google"
2. Clerk handles OAuth authentication
3. On successful sign-in:
   - User is redirected to dashboard
   - Webhook sends user data to backend
   - Backend stores user in MongoDB
     
## 🔧 Development

For local webhook testing:
1. Install localtunnel: `npm install -g localtunnel`
2. Run: `lt --port 5000`
3. Use the generated URL in Clerk webhook settings
