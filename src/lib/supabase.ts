import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://ftwryvsvosxvijcynvai.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImEwYjUxYTY1LTA1MGQtNGI4Ny05NGJiLWUxYzljZDQ1ZDZiNCJ9.eyJwcm9qZWN0SWQiOiJmdHdyeXZzdm9zeHZpamN5bnZhaSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzcxNzAyMjIzLCJleHAiOjIwODcwNjIyMjMsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.HudtwZiFIK9Hm2w46UvztIf9903vuFMnjIzyR_03erM';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };