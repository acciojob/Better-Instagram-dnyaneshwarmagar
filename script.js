//your code here
// Get all draggable elements
const draggables = document.querySelectorAll('.image');

let dragSrcEl = null;

// Function to handle drag start event
function handleDragStart(e) {
  dragSrcEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', dragSrcEl.innerHTML);
}

// Function to handle drag over event
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

// Function to handle drop event
function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl !== this) {
    // Swap the content of the dragged and dropped elements
    dragSrcEl.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

// Add event listeners to draggable elements
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', handleDragStart);
  draggable.addEventListener('dragover', handleDragOver);
  draggable.addEventListener('drop', handleDrop);
});

