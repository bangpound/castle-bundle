function (doc)
{
    var utc = doc.published.split(/\D/);
    utc[1] = utc[1] - 1;
    var date = new Date(Date.UTC.apply(null, utc));
    if (date && doc.links) {
        doc.links.forEach(function (link) {
            if (link.rel === 'enclosure') {
                emit([link.href, date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()], 1);
            }
        });
    }
}
