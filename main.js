function displayMessage(x) {

    // console.log(x.message);
    if (x.status === "success") {
        $(`#imageContainer`).html(`<img src="${x.message}">`)
    } else {
        alert(`${x.message}`);
    }
    $('.search').removeClass('hidden');

}

function thatsFetch(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(responseJson => displayMessage(responseJson))
        .catch(error => console.error(error));
}

function breedSearch() {
    $('#enterButton').click(event => {
        $('.search').addClass('hidden');
        let breed = $('#search').val().toLowerCase();
        console.log(breed);
        thatsFetch(breed);
    })
}

$(breedSearch);
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful