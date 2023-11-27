import { json } from '@sveltejs/kit';

export async function POST({ request }) {

    const payload = await request.json();

    const response = await fetch('https://classes.iastate.edu/app/rest/courses/preferences', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const data = await response.json();
        return json(data);
    } else {
        // Handle errors, e.g., return a status code and message
        return new Response(undefined, { status: 500, statusText: 'Internal Server Error' });
    }
}
