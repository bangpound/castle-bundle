function (doc)
{
    var utc = doc.published.split(/\D/);
    utc[1] = utc[1] - 1;
    var date = new Date(Date.UTC.apply(null, utc));
    if (date) {
        emit([ doc.type ], 1);
    }
}
