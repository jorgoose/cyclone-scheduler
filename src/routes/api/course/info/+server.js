

// IMPORTANT NOTE:
// ========================================================================================================================
// This endpoint is not currently being used in the application.
// It is an example of how to parse the HTML of a course catalog page to extract the course title and description.
// Ideally, this functionality will be implemented using a serverless function (i.e. AWS Lambda, Cloud Functions, etc.)
// in order to update the course information in the database, rather than updating the data directly on the client-side 
// (which is not necessary and wastes requests, bandwidth, and processing power).
// ========================================================================================================================

// src/routes/parseCourse.js
import { json } from '@sveltejs/kit';
import { parse } from 'node-html-parser';

export async function POST({ request }) {
    const requestBody = await request.json();
    const courseUrl = requestBody.catalogUrl;

    const response = await fetch(courseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Extracting HTML text content from the response
    const html = await response.text();

    // Example response:
    // <div class="courseblock">
    // <div class='courseblocktitle'><strong>ACCT&#160;215: Legal Environment of Business</strong><span></span></div><div class="courseblockdesc accordion-content"><p class="credits noindent">
    // (3-0) Cr. 3.
    // F.S.SS. 
    // </p><p class='prereq'><em>Prereq: Sophomore classification</em><br />General history, structure, and principles of the US legal system. The legal system, as an agency of social control and tool for resolving disputes. The court systems, Constitution, torts, crimes, intellectual property, contracts, property rights, employment law, basic business entity law, bankruptcy, administrative agencies, environmental law and agency law.
    // </p></div>
    // </div>

    // We need to parse the HTML to extract the course information:
    // 1.) The full course title (ex: "Legal Environment of Business")
    // 2.) The course description (ex: "General history, structure, and principles of the US legal system. The legal system, as an agency of social control and tool for resolving disputes. The court systems, Constitution, torts, crimes, intellectual property, contracts, property rights, employment law, basic business entity law, bankruptcy, administrative agencies, environmental law and agency law.")

    // We can use the node-html-parser library to parse the HTML
    const root = parse(html);
    console.log(html);

    // The course title is in the first <strong> tag, after the first colon (:)
    const fullCourseTitle = root.querySelector('strong').text.split(':')[1].trim();

    console.log("FULL COURSE TITLE: " + fullCourseTitle);

    // The course decsription is in the second <p> element, but only after the newline character (\n)
    const courseDescription = root.querySelectorAll('p')[1].text.split('\n')[1].trim();

    console.log("COURSE DESCRIPTION: " + courseDescription);

    // Return the course title and description as JSON
    return json({
        fullCourseTitle,
        courseDescription
    });
}
