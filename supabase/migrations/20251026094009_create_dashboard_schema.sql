/*
  # Dashboard Schema - User Subscriptions and Usage Tracking

  ## Overview
  This migration creates the core database structure for the dashboard functionality,
  enabling payment tracking, subscription management, and usage analytics across
  all apps in the PrismicX ecosystem.

  ## New Tables

  ### `users`
  Stores user account information
  - `id` (uuid, primary key) - Unique user identifier
  - `email` (text, unique) - User email address
  - `full_name` (text) - User's full name
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `subscriptions`
  Tracks active subscriptions for each app
  - `id` (uuid, primary key) - Unique subscription identifier
  - `user_id` (uuid, foreign key) - References users table
  - `app_name` (text) - Name of the app (MasterSearch, CallAI, Vision, etc.)
  - `tier` (text) - Subscription tier (free, pro, enterprise)
  - `status` (text) - Subscription status (active, cancelled, expired)
  - `price` (numeric) - Monthly price
  - `billing_cycle` (text) - Billing frequency (monthly, yearly)
  - `started_at` (timestamptz) - Subscription start date
  - `expires_at` (timestamptz) - Subscription expiration date
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `usage_metrics`
  Tracks usage statistics per app per user
  - `id` (uuid, primary key) - Unique metric identifier
  - `user_id` (uuid, foreign key) - References users table
  - `app_name` (text) - Name of the app
  - `metric_type` (text) - Type of metric (searches, calls, api_calls, etc.)
  - `count` (integer) - Usage count
  - `date` (date) - Date of the metric
  - `created_at` (timestamptz) - Record creation timestamp

  ### `payments`
  Records all payment transactions
  - `id` (uuid, primary key) - Unique payment identifier
  - `user_id` (uuid, foreign key) - References users table
  - `subscription_id` (uuid, foreign key) - References subscriptions table
  - `amount` (numeric) - Payment amount
  - `currency` (text) - Payment currency (default: USD)
  - `status` (text) - Payment status (succeeded, pending, failed)
  - `payment_method` (text) - Payment method used
  - `transaction_id` (text) - External transaction reference
  - `created_at` (timestamptz) - Payment timestamp

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Users can only access their own data
  - Authenticated users only

  ## Important Notes
  - All monetary values stored as numeric with 2 decimal precision
  - Timestamps use timestamptz for timezone awareness
  - Foreign key constraints ensure data integrity
  - Indexes added for frequently queried columns
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  app_name text NOT NULL,
  tier text NOT NULL DEFAULT 'free',
  status text NOT NULL DEFAULT 'active',
  price numeric(10, 2) DEFAULT 0.00,
  billing_cycle text DEFAULT 'monthly',
  started_at timestamptz DEFAULT now(),
  expires_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create usage_metrics table
CREATE TABLE IF NOT EXISTS usage_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  app_name text NOT NULL,
  metric_type text NOT NULL,
  count integer DEFAULT 0,
  date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subscription_id uuid REFERENCES subscriptions(id) ON DELETE SET NULL,
  amount numeric(10, 2) NOT NULL,
  currency text DEFAULT 'USD',
  status text NOT NULL DEFAULT 'pending',
  payment_method text,
  transaction_id text,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_app_name ON subscriptions(app_name);
CREATE INDEX IF NOT EXISTS idx_usage_metrics_user_id ON usage_metrics(user_id);
CREATE INDEX IF NOT EXISTS idx_usage_metrics_date ON usage_metrics(date);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- RLS Policies for subscriptions table
CREATE POLICY "Users can view own subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscriptions"
  ON subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for usage_metrics table
CREATE POLICY "Users can view own usage metrics"
  ON usage_metrics FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own usage metrics"
  ON usage_metrics FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for payments table
CREATE POLICY "Users can view own payments"
  ON payments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own payments"
  ON payments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);