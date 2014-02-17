function (doc)
{
    var utc = doc.published.split(/\D/);
    utc[1] = utc[1] - 1;
    var date = new Date(Date.UTC.apply(null, utc));
    if (date && doc.categories) {
        doc.categories.forEach(function (category) {
            emit([ date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), category.term.toLowerCase() ]);
        });
    }
}
