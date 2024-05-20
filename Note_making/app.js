const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
addBtn.addEventListener("click",
  function(){
    addNote() 
   
  }
)

const saveNotes = ()=>{
    const notes= document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value);
        }
    )
 if(data.length===0){
 localStorage.removeItem("notes");
 }
 else {
    localStorage.setItem("notes", JSON.stringify(data));
 }        
     
}
const addNote = (text = "")=>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
      <i class="save fa fa-save"></i>
      <i class="trash fa fa-trash"></i>
    </div>
    <textarea></textarea>
    `;
    note.querySelector(".trash").addEventListener("click",
    function(){
        note.remove();
        saveNotes();
    }
    )
    note.querySelector(".save").addEventListener("click",
    function(){
        saveNotes();
    }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )

    main.appendChild(note);
    saveNotes();
}
(
    function()
    {
        const lsNotes =JSON.parse(localStorage.getItem("notes"));
        if(lsNotes==null)
        {
            addNote()
        }
        else{
            lsNotes.forEach(
                (lsNote)=>{
                    addNote(lsNote)
                }
            )
        }
    }

)()