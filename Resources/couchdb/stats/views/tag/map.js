function (doc)
{
    var date =  require('views/lib/date').Date.parseString(doc.published, 'yyyy-MM-dd HH:mm:ss.000000');
    if (date && doc.categories) {
        doc.categories.forEach(function (category) {
            emit([ category.term.toLowerCase(), date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds() ]);
        });
    }
}
