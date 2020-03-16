const moongse = require('mongoose');
var VideoSchema = new moongse.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    description: { type: string },
    source: { type: string, require },
    card: { type: string, require },
    background: { type: string, require },
    title: { type: string, require },
    category: { type: string, require }
})
export default mongoose.model('Video', VideoSchema)