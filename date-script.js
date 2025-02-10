function submitDate() {
    const dateInput = document.getElementById('dateInput').value;

    if (!dateInput) {
        alert("Vælge en dato :)");
        return;
    }

    // Save to Firestore
    db.collection("valentine_dates").add({
        selectedDate: dateInput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert("Dato gemt ❤️");
        window.location.href = "index.html";
    });
    
}

