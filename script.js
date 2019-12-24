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
        tongLaiPhaiTra += laiPhaiTra;
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

$('#soSanhLai').submit(function (event) {
    event.preventDefault();
    $('#keHoachTraLai').empty();

    let soTienCanVay = parseNumber($('#soTienCanVay').val());
    let thoiGianVay = $('#thoiGianVay').val();
    let laiSuatUocTinh = $('#laiSuatUocTinh').val();
    let laiSuatUuDai1 = $('#laiSuatUuDai1').val();
    let thoiGianUuDai1 = $('#thoiGianUuDai1').val();
    let laiSuatUuDai2 = $('#laiSuatUuDai2').val();
    let thoiGianUuDai2 = $('#thoiGianUuDai2').val();

    let thoiGianSoSanh = Math.max(thoiGianUuDai1, thoiGianUuDai2);

    let tienGocConLai = soTienCanVay;
    let tongLaiPhaiTra1 = 0;
    let tongLaiPhaiTra2 = 0;

    for (let i = 1; i <= thoiGianSoSanh; i++) {
        let gocPhaiTra = Math.floor(soTienCanVay / thoiGianVay);
        let laiPhaiTra1 = Math.floor(tienGocConLai * laiSuatUocTinh / 100 / 12);
        let laiPhaiTra2 = Math.floor(tienGocConLai * laiSuatUocTinh / 100 / 12);
        if (i <= thoiGianUuDai1) {
            laiPhaiTra1 = Math.floor(tienGocConLai * laiSuatUuDai1 / 100 / 12);
        }
        if (i <= thoiGianUuDai2) {
            laiPhaiTra2 = Math.floor(tienGocConLai * laiSuatUuDai2 / 100 / 12);
        }

        tienGocConLai -= gocPhaiTra;
        tongLaiPhaiTra1 += laiPhaiTra1;
        tongLaiPhaiTra2 += laiPhaiTra2;
        $('#keHoachTraLai').append(
            "<tr> \
                <td>" + i + "</td> \
                <td>" + formatNumber(gocPhaiTra) + "</td> \
                <td>" + formatNumber(laiPhaiTra1) + "</td> \
                <td>" + formatNumber(gocPhaiTra + laiPhaiTra1) + "</td> \
                <td>" + formatNumber(laiPhaiTra2) + "</td> \
                <td>" + formatNumber(gocPhaiTra + laiPhaiTra2) + "</td> \
            </tr>");
    }
    $('#keHoachTraLai').append(
        "<tr> \
            <td>Tổng</td> \
            <td>" + formatNumber(soTienCanVay) + "</td> \
            <td>" + formatNumber(tongLaiPhaiTra1) + "</td> \
            <td>" + formatNumber(soTienCanVay + tongLaiPhaiTra1) + "</td> \
            <td>" + formatNumber(tongLaiPhaiTra2) + "</td> \
            <td>" + formatNumber(soTienCanVay + tongLaiPhaiTra2) + "</td> \
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