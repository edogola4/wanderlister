// Add Item to Bucket List
function addBucketItem() {
    const bucketItem = document.getElementById("bucketItem").value;
    if (bucketItem) {
      let bucketList = JSON.parse(localStorage.getItem("bucketList")) || [];
      bucketList.push(bucketItem);
      localStorage.setItem("bucketList", JSON.stringify(bucketList));
      document.getElementById("bucketItem").value = "";
      displayBucketList();
    }
  }
  
  // Display Bucket List Items
  function displayBucketList() {
    const bucketList = JSON.parse(localStorage.getItem("bucketList")) || [];
    const bucketListContainer = document.getElementById("bucketList");
    bucketListContainer.innerHTML = "";
    bucketList.forEach((item, index) => {
      bucketListContainer.innerHTML += `<li>${item} <button onclick="removeBucketItem(${index})">Remove</button></li>`;
    });
  }
  
  // Remove Item from Bucket List
  function removeBucketItem(index) {
    let bucketList = JSON.parse(localStorage.getItem("bucketList"));
    bucketList.splice(index, 1);
    localStorage.setItem("bucketList", JSON.stringify(bucketList));
    displayBucketList();
  }
  
  // Initialize Bucket List Display
  window.onload = displayBucketList;
  