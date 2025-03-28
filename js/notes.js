async function fetchNotes() {
  const response = await fetch("../data/notes.json");
  const notes = await response.json();
  const notesList = document.getElementById("notes-list");
  const noteContent = document.getElementById("note-content");

  for (const subject in notes) {
    const div = document.createElement("div");
    div.classList.add("note-card");

    let notesHTML = `<h2 class="note-subject">${subject.replace(/_/g, " ")}</h2><ul>`;

    notes[subject].forEach((note) => {
      notesHTML += `<li>
        <button class="note-link" data-subject="${subject.toLowerCase().replace(/ /g, "_")}" data-file="${note.filename}">
          ${note.title}
        </button>
        <span class="note-date">(${note.date})</span>
      </li>`;
    });

    notesHTML += `</ul>`;
    div.innerHTML = notesHTML;
    notesList.appendChild(div);
  }

  notesList.addEventListener("click", async (e) => {
    if (e.target.tagName === "BUTTON") {
      const subject = e.target.dataset.subject;
      const file = e.target.dataset.file;
      const res = await fetch(`../markdown/notes/${subject}/${file}`);
      const markdown = await res.text();

      noteContent.innerHTML = marked.parse(markdown);
      noteContent.classList.remove("hidden");

      renderMathInElement(noteContent);
      window.scrollTo({ top: noteContent.offsetTop - 50, behavior: "smooth" });
    }
  });
}

fetchNotes();
