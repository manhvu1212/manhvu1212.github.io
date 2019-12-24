$('#tinhLai').submit(function (event) {
    event.preventDefault();
    $('#keHoachTraLai').empty();

    let soTienCanVay = parseNumber($('#soTienCanVay').val());
    let thoiGianVay = $('#thoiGianVay').val();
    let laiSuatUocTinh = $('#laiSuatUocTinh').val();
    let laiSuatUuDai = $('#laiSuatUuDai').val();
    let thoiGianUuDai = $('#thoiGianUuDai').val();

    let tienGocConLai = soTienCanVay;
    let tongLaiPhaiTra = 0;
    for (let i = 1; i <= thoiGianVay; i++) {
        let gocPhaiTra = Math.floor(soTienCanVay / thoiGianVay);
        let laiPhaiTra = Math.floor(tienGocConLai * laiSuatUocTinh / 100 / 12);
        if (i <= thoiGianUuDai) {
            laiPhaiTra = Math.floor(tienGocConLai * laiSuatUuDai / 100 / 12);
        }

        let tongTienPhaiTra = gocPhaiTra + laiPhaiTra;
        tienGocConLai -= gocPhaiTra;
        tongLaiPhaiTra += laiPhaiTra
        $('#keHoachTraLai').append(
            "<tr> \
                <td>" + i + "</td> \
                <td>" + formatNumber(gocPhaiTra) + "</td> \
                <td>" + formatNumber(laiPhaiTra) + "</td> \
                <td>" + formatNumber(tongTienPhaiTra) + "</td> \
                <td>" + formatNumber(tienGocConLai) + "</td> \
            </tr>");
    }
    $('#keHoachTraLai').append(
        "<tr> \
            <td>Tổng</td> \
            <td>" + formatNumber(soTienCanVay) + "</td> \
            <td>" + formatNumber(tongLaiPhaiTra) + "</td> \
            <td>" + formatNumber(soTienCanVay + tongLaiPhaiTra) + "</td> \
            <td></td> \
        </tr>");
});

$('#soTienCanVay').keyup(function () {
    $(this).val(formatNumber($(this).val()));
});

function formatNumber(n) {
    // format number 1000000 to 1,234,567
    if (n) {
        return n.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return n;
}

function parseNumber(n) {
    return parseInt(n.replace(/\D/g, "").replace(/,/, ""));
}