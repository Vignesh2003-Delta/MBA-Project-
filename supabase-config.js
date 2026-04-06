// We use a self-executing function or unique names to ensure no conflicts
const _supabaseUrl = 'https://duvbxqywfohzgcwknfjw.supabase.co';
const _supabaseKey = 'sb_publishable_nE0AMLIJTPedUFooLjhtSw_aaO-JgPk';

// Use a unique name for your client
const sbClient = supabase.createClient(_supabaseUrl, _supabaseKey);

async function logActivity(actionName) {
    try {
        const { error } = await sbClient
            .from('user logs')
            .insert([{ 
                action: actionName, 
                user_agent: navigator.userAgent 
            }]);
        
        if (error) console.error("Supabase Error:", error.message);
        else console.log("Success: Logged " + actionName);
    } catch (err) {
        console.error("Connection Error:", err);
    }
}

// Log initial visit
window.addEventListener('load', () => {
    logActivity('Website Visit');
});
