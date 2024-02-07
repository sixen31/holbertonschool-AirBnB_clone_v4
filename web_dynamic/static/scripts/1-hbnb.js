$(document).ready(function() {
    let selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        updateAmenities(selectedAmenities);
    });

    function updateAmenities(amenities) {
        let amenitiesList = Object.values(amenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    }
});
