import {createClient} from '@supabase/supabase-js';

const supabase=createClient('https://vqudtezdzidfgfcexqpm.supabase.co'
 ,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxdWR0ZXpkemlkZmdmY2V4cXBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NTU3Mjg4NywiZXhwIjoxOTgxMTQ4ODg3fQ.6FfryVzqTWs1zpEZmiLQ9IiOE0TzdAI7JoJQLL9VQ6I");
 
export default supabase;
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://vqudtezdzidfgfcexqpm.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)