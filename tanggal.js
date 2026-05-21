        function calculate() {
            const date1 = new Date(document.getElementById('date1').value);
            const date2 = new Date(document.getElementById('date2').value);
            const date3 = new Date(document.getElementById('date3').value);
            const date4 = new Date(document.getElementById('date4').value);

            const diff1 = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
            const diff2 = Math.abs(date4 - date3) / (1000 * 60 * 60 * 24);

            document.getElementById('result').textContent = `selisih antara tanggal pertama dan kedua adalah ${diff1} hari. 
            selisih antara tanggal ketiga dan keempat adalah ${diff2} hari.`;
        }