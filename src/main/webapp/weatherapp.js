
    function initPage (){
	    fetch("https://ipapi.co/145.90.86.144/json/")
	        .then(response => response.json())
	        .then(function (data) {
	            ipJson = data;
	            document.querySelector("#countryCode").innerHTML = "Landcode: " + ipJson.country;
	            document.querySelector("#country").innerHTML = "Land: " + ipJson.country_name;
	            document.querySelector("#region").innerHTML = "Regio: " + ipJson.region;
	            document.querySelector("#city").innerHTML = "Stad: " + ipJson.city;
	            document.querySelector("#postCode").innerHTML = "Postcode: " + ipJson.postal;
	            document.querySelector("#latitude").innerHTML = "Latitude: " + ipJson.latitude;
	            document.querySelector("#longitude").innerHTML = "Longitude: " + ipJson.longitude;
	            document.querySelector("#ip").innerHTML = "Ip: " + ipJson.ip;
	
	            showWeather(ipJson.longitude, ipJson.latitude, null);
	        });
	}
	
    function showWeather(longitude, latitude, city) {
        const apiKey = "78fb38ea35d774b4e6ba73ad40981d1c";
        if (longitude != null && latitude != null){
            var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
        }
        else {
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
        }

        if (sessionStorage.hasOwnProperty(city)){
            let datumInfo = new Date();
            let tijdInfo = datumInfo.getTime();
            var sessionWeatherJson = JSON.parse(window.sessionStorage.getItem(city));
            if ((weatherJson.tijd + 6000) > tijdInfo) {
                window.sessionStorage.setItem(city, JSON.stringify(sessionWeatherJson));
                document.querySelector("#temp").innerHTML = "Temperatuur: " + (parseInt(sessionWeatherJson.main.temp) - 276.16).toString() + "°C";
                document.querySelector("#humid").innerHTML = "Luchtvochtigheid: " + sessionWeatherJson.main.humidity.toString();
                document.querySelector("#wind").innerHTML = "Windkracht: " + sessionWeatherJson.wind.speed.toString();
                document.querySelector("#sunUp").innerHTML = "Zonsopgang: " + sessionWeatherJson.sys.sunrise.toString();
                document.querySelector("#sunDown").innerHTML = "Zonsondergang: " + sessionWeatherJson.sys.sunset.toString();
                alert("This data was downloaded from sessionstorage")

            }

        }
        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                weatherJson = data;
                let datumInfo = new Date();
                let tijdInfo = datumInfo.getTime();
                weatherJson.tijd = tijdInfo;
                if (city != null) {
                    window.sessionStorage.setItem(city, JSON.stringify(weatherJson));
                }
                else {
                    window.sessionStorage.setItem("Utrecht", JSON.stringify(weatherJson));
                }
                console.log("city " + city + " saved in session storage!");
                document.querySelector("#temp").innerHTML = "Temperatuur: " + (parseInt(weatherJson.main.temp) - 276.16).toString() + "°C";
                document.querySelector("#humid").innerHTML = "Luchtvochtigheid: " + weatherJson.main.humidity.toString();
                document.querySelector("#wind").innerHTML = "Windkracht: " + weatherJson.wind.speed.toString();
                document.querySelector("#sunUp").innerHTML = "Zonsopgang: " + weatherJson.sys.sunrise.toString();
                document.querySelector("#sunDown").innerHTML = "Zonsondergang: " + weatherJson.sys.sunset.toString();
            });
    }


    function loadCountries() {
        fetch('restservices/countries')
            .then(response => response.json())
            .then(function (data) {
                for (const country of data) {
                    var row = document.createElement("tr");
                    row.setAttribute("id", country.capital);
                    row.addEventListener("click", function () {
                        if (this.id === "Antarctica") {
                            alert("No weather found for this city!")
                        }
                        else if (this.id === "Washington DC"){
                            showWeather(null,null, "Washington");
                            alert("Washington DC")
                        }
                        else {
                            showWeather(null, null, country.capital);
                            alert(country.capital);
                        }
                    });

                    var countryCollumn = document.createElement("td");
                    var name = document.createTextNode(country.name);
                    countryCollumn.appendChild(name);
                    row.appendChild(countryCollumn);

                    var capitalCollumn = document.createElement("td");
                    var capital = document.createTextNode(country.capital);
                    capitalCollumn.appendChild(capital);
                    row.appendChild(capitalCollumn);

                    var regionCollumn = document.createElement("td");
                    var region = document.createTextNode(country.region);
                    regionCollumn.style.whiteSpace = "nowrap";
                    regionCollumn.appendChild(region);
                    row.appendChild(regionCollumn);

                    var surfaceCollumn = document.createElement("td");
                    var surface = document.createTextNode(country.surface);
                    surfaceCollumn.appendChild(surface);
                    row.appendChild(surfaceCollumn);

                    var populationCollumn = document.createElement("td");
                    var population = document.createTextNode(country.population);
                    populationCollumn.appendChild(population);
                    row.appendChild(populationCollumn);

                    var deleteCollumn = document.createElement("td");
                    var deleteElement = document.createElement("input");
                    deleteElement.setAttribute("type", "button");
                    deleteElement.setAttribute("id", country.code);
                    deleteElement.setAttribute("value", "Verwijder");
                    deleteCollumn.appendChild(deleteElement);
                    row.appendChild(deleteCollumn);

                    deleteElement.addEventListener('click', function () {
                        var fetchOptions = {method: 'DELETE', headers: {'Authorization': 'Bearer ' + window.sessionStorage.getItem("myJWT")}};
                        fetch("restservices/countries/" + this.id, fetchOptions)
                            .then(function (response) {
                                if (response.ok) {
                                    alert("Land verwijderd!");
                                }
                                else {
                                    alert("Kon land niet verwijderen, Error code " + response.status);
                                }

                            })

                    });
                    var updateCollumn = document.createElement("td");
                    var updateElement = document.createElement("input");
                    updateElement.setAttribute("type", "button");
                    updateElement.setAttribute("id", country.code);
                    updateElement.setAttribute("value", "Wijzig");
                    updateCollumn.appendChild(updateElement);
                    row.appendChild(updateCollumn);

                    updateElement.addEventListener('click', function (){
                        openForm2();
                        wijzigenLand();
                        document.getElementById("editCode").value = country.code;
                        document.getElementById("editName").value = country.name;
                        document.getElementById("editCapital").value = country.capital;
                        document.getElementById("editRegion").value = country.region;
                        document.getElementById("editSurface").value = country.surface;
                        document.getElementById("editPopulation").value = country.population;
                        document.getElementById("landInput").focus();


                    });



                    document.querySelector("#tabel").appendChild(row);
                    var table, rows, switching, i, x, y, shouldSwitch;
                    table = document.getElementById("tabel");
                    switching = true;
                    while (switching) {
                        switching = false;
                        rows = table.getElementsByTagName("tr");
                        for (i = 1; i < (rows.length - 1); i++) {
                            shouldSwitch = false;
                            x = rows[i].getElementsByTagName("td")[0];
                            y = rows[i + 1].getElementsByTagName("td")[0];
                            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                                shouldSwitch = true;
                                break;
                            }
                        }
                        if (shouldSwitch) {
                            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                            switching = true;
                        }
                    }
                }
            });
    }
    function openForm() {
        document.getElementById("opslaanForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("opslaanForm").style.display = "none";
    }

    function openForm2() {
        document.getElementById("aanpasForm").style.display = "block";
    }

    function closeForm2() {
        document.getElementById("aanpasForm").style.display = "none";
    }

    function toevoegenLand() {
        console.log("toevoegen");
        document.querySelector("#opslaan").addEventListener('click', function () {
            console.log("opslaanTest");
            var formData = new FormData(document.querySelector("#formOpslaan"));
            for (var value of formData.values()) {
                console.log(value);
                if(value === null || value ===""){
                    console.log("niet alle velden zijn ingevuld!");
                    alert("vul alle velden in!");
                    return;
                }
            }

            var encData = new URLSearchParams(formData.entries());
            console.log(window.sessionStorage.getItem("sessionToken"));
            var fetchOptions = {method: "PUT", body: encData, headers: {'Authorization': 'Bearer ' + window.sessionStorage.getItem("myJWT")}};
            console.log(fetchOptions);
            fetch("restservices/countries/addcountry/", fetchOptions)
                .then(response => response)
                .then(function (myJson) {
                    console.log(myJson);
                    loadCountries()

                })
        });
    }

    function wijzigenLand() {
        console.log("toevoegen");
        document.querySelector("#editOpslaan").addEventListener('click', function () {
            var formData = new FormData(document.querySelector("#formAanpassen"));
            for (var value of formData.values()) {
                console.log(value);
                if(value === null || value ===""){
                    console.log("niet alle velden zijn ingevuld!");
                    alert("vul alle velden in!");
                    return;
                }
            }

            var encData = new URLSearchParams(formData.entries());
            var fetchOptions = {method: "PUT", body: encData};
            console.log(fetchOptions);
            fetch("restservices/countries/" + document.getElementById("editCode").value , fetchOptions)
                .then(response => response.json())
                .then(function (myJson){
                    if(response.ok){
                        console.log(myJson);
                        alert("Land gewijzigd");
                        loadCountries();
                        return;
                    } else { alert("Kon land niet wijzigen"); return;}


                })
        });
    }

initPage();
loadCountries();
wijzigenLand();
toevoegenLand();