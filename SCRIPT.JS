function findCareer() {

    let interest = document.getElementById("interest").value;
    let strength = document.getElementById("strength").value;

    let careerName = "";
    let description = "";
    let skills = "";


    /* TECHNOLOGY */

    if (interest === "technology") {

        careerName = "Frontend / Software Developer";

        description =
            "Technology could be a strong career direction for you. " +
            "You can build websites, applications and software products.";

        skills =
            "HTML, CSS, JavaScript, Git, Python and Problem Solving";
    }


    /* DATA & AI */

    else if (interest === "data") {

        careerName = "Data Analyst / AI Career Path";

        description =
            "A Data & AI career can be suitable if you enjoy " +
            "working with numbers, information and technology.";

        skills =
            "Python, SQL, Statistics, Excel, Data Visualization and AI";
    }


    /* DESIGN */

    else if (interest === "design") {

        careerName = "UI/UX Designer";

        description =
            "Design can be a good career direction if you enjoy " +
            "creativity, visual thinking and solving user problems.";

        skills =
            "Figma, UI Design, UX Research, Prototyping and Design Thinking";
    }


    /* BUSINESS */

    else if (interest === "business") {

        careerName = "Business / Product Career";

        description =
            "Business careers are suitable for people who enjoy " +
            "communication, planning, leadership and problem solving.";

        skills =
            "Communication, Marketing, Business Analysis, Leadership and Management";
    }


    /* GOVERNMENT */

    else if (interest === "government") {

        careerName = "Government Career Path";

        description =
            "You can explore government examinations and public-sector " +
            "career opportunities based on your qualifications.";

        skills =
            "General Knowledge, Reasoning, Aptitude, Communication and Current Affairs";
    }


    /* NO SELECTION */

    else {

        alert("Please select your interest.");

        return;
    }


    /* SHOW RESULT */

    document.getElementById("careerName").innerText =
        careerName;

    document.getElementById("careerDescription").innerText =
        description;

    document.getElementById("careerSkills").innerText =
        skills;

    document.getElementById("result").style.display =
        "block";
}