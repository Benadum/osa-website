 var parent = document.querySelector("#random-carousel");
    var divs = parent.children;
    var frag = document.createDocumentFragment();
    while (divs.length) {
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
    parent.appendChild(frag);

    // Ensure one slide is set to 'active' or it won't show!
    var items = document.querySelectorAll('.carousel-item');
    items.forEach(el => el.classList.remove('active')); // Reset all
    items[0].classList.add('active'); // Make the new first one visible

     function toggleMethod() {
        if (document.getElementById('radioMpesa').checked) {
            document.getElementById('mpesa-box').style.display = 'block';
            document.getElementById('paypal-box').style.display = 'none';
        } else {
            document.getElementById('mpesa-box').style.display = 'none';
            document.getElementById('paypal-box').style.display = 'block';
        }
    }

    // 2. LOGIC FOR FIXED BUTTONS ($5, $10, etc)
    function setAmount(amount, element) {
        // Clear the custom box so it doesn't confuse the donor
        document.getElementById('customAmount').value = ""; 
        
        // Update variables
        document.getElementById('realAmount').value = amount;
        document.getElementById('displayAmount').innerText = amount;
        
        // Highlight the button blue
        var buttons = document.querySelectorAll('.donation-btn-group .btn');
        buttons.forEach(btn => btn.classList.remove('active-amount'));
        element.classList.add('active-amount');
    }

    // 3. LOGIC FOR CUSTOM AMOUNT INPUT
    function setCustomAmount(element) {
        // Remove blue highlight from all fixed buttons
        var buttons = document.querySelectorAll('.donation-btn-group .btn');
        buttons.forEach(btn => btn.classList.remove('active-amount'));

        // Update the Paypal Value live as they type
        var val = element.value;
        if(val) {
            document.getElementById('realAmount').value = val;
            document.getElementById('displayAmount').innerText = val;
        }
    }