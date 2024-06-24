function calculateDaysUntilEvent(eventDate) {
    // Get the current date
    const currentDate = new Date();
  
    // Create a Date object for the event date
    const eventStartDate = new Date(eventDate);
  
    // Calculate the difference in time between the two dates in milliseconds
    const timeDifference = eventStartDate - currentDate;
  
    // Convert the time difference from milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }
  
  // Example usage:
  const eventDate = "2024-12-31"; // Event start date in YYYY-MM-DD format
  const daysUntilEvent = calculateDaysUntilEvent(eventDate);
  console.log(`Number of days until the event: ${daysUntilEvent}`);
  