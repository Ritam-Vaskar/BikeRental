//this is for mobile veiw sidebar function

$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-time');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load' , function(){
        $('#menu').removeClass('fa-time');
        $('header').removeClass('toggle');
    });
})

//for calculating the bill

function calculateTotalPrice() {
    // Get input values
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    // Convert time strings to Date objects
    const start = new Date('2000-01-01T' + startTime + ':00');
    const end = new Date('2000-01-01T' + endTime + ':00');

    // Calculate difference in milliseconds
    const diffMs = end - start;

    // Convert milliseconds to hours
    const rentalHours = diffMs / (1000 * 60 * 60);

    // Get hourly rate (for demonstration purposes, hardcoded to $10)
    const hourlyRate = 10;

    // Calculate total price
    const totalPrice = hourlyRate * rentalHours;

    // Display total price
    document.getElementById('totalPrice').innerText = "Total Price: $" + totalPrice.toFixed(2);
}