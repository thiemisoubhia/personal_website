function toggleText(element) {
    const textMap = {
        "Programming Languages": "C#, Java, JavaScript, Dart",
        "Web Development": "HTML, CSS, Figma, JavaScript",
        "Databases and Data Analytics": "Oracle SQL, MongoDB, Power BI",
        "Chatbots": "Dialogflow, Watson IBM",
        "Operating Systems": "Windows, iOS, Linux",
        "Mobile Development": "Flutter, Kotlin"
    };

    // Check if the original text is stored in the dataset; if not, store it
    if (!element.dataset.originalText) {
        element.dataset.originalText = element.innerText;
    }

    // Toggle text between original and mapped version
    if (!element.classList.contains("black")) {
        element.innerText = textMap[element.dataset.originalText] || element.dataset.originalText;
        element.classList.add("black");
    } else {
        element.innerText = element.dataset.originalText;
        element.classList.remove("black");
    }
}

