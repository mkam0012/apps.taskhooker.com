// Your web app's Firebase configuration
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", async () => {
    const visitorCountElement = document.getElementById("visitor-count");
    
    // Check if the user has visited before
    const visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
        // New visitor
        const newVisitorRef = await db.collection('visitors').add({ timestamp: firebase.firestore.FieldValue.serverTimestamp() });
        localStorage.setItem('visitorId', newVisitorRef.id);
    }

    // Get the total number of unique visitors
    const visitorCountSnapshot = await db.collection('visitors').get();
    visitorCountElement.innerText = visitorCountSnapshot.size;
});
