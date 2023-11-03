
        //  Q-1
        let firstVar = 3;
        let secVar = 5;
        let thVar = firstVar + secVar;
        document.write(`Sum Of ${firstVar} and ${secVar} is ${thVar} </br> `);

        //  Q-2 
        let a = 5;
        document.write(`intial Value: ${a}`, '<br>');
        a++;
        document.write('Value after increament:', a, '<br>');
        let b = 7;
        let c = a + b;
        document.write('Value after addition: ', c, '<br>');
        c--;
        document.write('Value after substraction:', c, '<br>');
        let f = c % 3;
        document.write('The Reminder is :', f, '<br>');

        //  Q-3
        let ticket_price = 600;
        let total_tickets = 5;
        let cost = total_tickets * ticket_price;
        document.write('Total Cost to Buy ' + total_tickets + ' tickets to a movie is ' + cost + 'PKR', '</br>');

        //  Q -4
        for (var i = 1; i <= 10; i++) {

            // multiply i with number
            let number = 8;
            let result = i * number;
            console.log(result)
            // display the result
            document.write(number + ' X ' + i + ' = ' + result + '<br>');
        }
        //  Q-5
        document.write(`<h2>Shopping Cart</h2>`);
        let itm1 = 650;
        let itm2 = 100;
        let quantityItem1 = 3;
        let quantityItem2 = 7;
        let shippingCharges = 100;
        let res = quantityItem1 * itm1;
        let res2 = quantityItem2 * itm2;
        let final_res = res2 + 100 + res;
        document.write("Total Cost Of Your Oreder is ", final_res);

        //  Q-6 Marksheet
        let totalMarks = 980;
        let obtainedMarks = 804;
        let percentage = (obtainedMarks / totalMarks) * 100;
        document.write('<h1>Marks SHeet</h1>');
        document.write(`totalMarks : ${totalMarks}  </br>`);
        document.write(`obtainedMarks : ${obtainedMarks}  </br>`);
        document.write(`percentage : ${percentage}  </br>`);

        //  Q-7 Currency Exchanger     
        let $dollar = 104.80;
        let $riyal = 28;
        let total_dollar = 10;
        let total_riyal = 25;
        let pkr_to_dollar = total_dollar * $dollar;
        let pkr_to_riyal = total_riyal * $riyal;
        let currency = pkr_to_dollar + pkr_to_riyal;
        console.log(currency)
        document.write('<h1>Currency in PKR</h1>');
        document.write(' Total Currency in PKR :' + currency);


        // Q.8 age Calculator
        let current_year = 2015;
        let birth_year = 2000;
        let age_result = current_year - birth_year;
        // console.log(age_result);
        document.write('<h1>Age Calculator</h1>');
        document.write('Your Current Year: ' + current_year + '<br>');
        document.write('Your Birth Year: ' + birth_year + '<br>');
        document.write('Your Age: ' + age_result + '<br>' + '<br>');

        // Q.9 The life time supply Calculator
        let snack = "oreo";
        let current_age = 15; // 65 - 15 = 50 X 3 = 150 ;
        let max_age = 65;
        let estimated_number = 3;

        let result = max_age - current_age;
        let finalRes = result * estimated_number;
        console.log(final_res);
        document.write('<h1>The Life time Supply Calculator</h1>')
        document.write('Your Favourite Snak:', snack, '</br>');
        document.write('Current Age:', current_age, '</br>');
        document.write('Maximum Age:', max_age, '</br>');
        document.write('Amount Of Snacks perday :', estimated_number, '</br>');
        document.write('You will Need ', finalRes, ' last you untill the ripe old age of ', max_age);
