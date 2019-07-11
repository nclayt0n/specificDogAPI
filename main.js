function displayMessage(x) {

    console.log(x.message)
    if (x.status === "success") {
        $(`#imageContainer`).html(`<img src="${x.message}">`)
    } else {
        alert(`${x.message}`);
    }
    $('.search').removeClass('hidden');

}

function thatsFetch(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayMessage(responseJson));
}

function breedSearch() {
    $('#enterButton').click(event => {
        $('.search').addClass('hidden');
        let breed = $('#search').val();
        console.log(breed);
        thatsFetch(breed);
    })
}

$(breedSearch());