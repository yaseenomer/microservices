import mongoose from 'mongoose';

interface CommentAttrs {
    body: string;
    postId: string;
}

interface CommentDoc extends mongoose.Document {
    body: string;
    postId: string;
}

interface CommentModel extends mongoose.Model<CommentDoc> {
    build(attrs: CommentAttrs): CommentDoc;
}

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});


commentSchema.statics.build = (attrs: CommentAttrs) => {
    return new Comment(attrs);
}


export const Comment = mongoose.model<CommentDoc, CommentModel>('Comment', commentSchema);