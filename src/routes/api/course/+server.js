// src/routes/parseCourse.js
import { json } from '@sveltejs/kit';
import { parse } from 'node-html-parser';

export async function POST({ request }) {
    const requestBody = await request.json();
    const courseUrl = requestBody.url;

    const response = await fetch(courseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const html = await response.text();
        const root = parse(html);

        const fullCourseTitleElement = root.querySelector('.courseblocktitle strong');
        const courseDescriptionElement = root.querySelector('.courseblockdesc p').nextSibling;

        const fullCourseTitle = fullCourseTitleElement ? fullCourseTitleElement.textContent.split(': ')[1].trim() : '';
        const courseDescription = courseDescriptionElement ? courseDescriptionElement.textContent.trim() : '';

        return json({
            fullCourseTitle,
            courseDescription
        });
    } else {
        // Handle errors, e.g., return a status code and message
        return new Response(undefined, { status: 500, statusText: 'Internal Server Error' });
    }
}
