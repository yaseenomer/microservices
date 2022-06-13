import mongoose, { Schema } from 'mongoose';

interface PostAttrs {
    title: string;
    body: string;
}

export interface PostDoc extends mongoose.Document {
    title: string;
    body: string;
}

interface PostModel extends mongoose.Model<PostDoc> {
    build(attrs: PostAttrs): PostDoc;
}

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        body: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }
);

postSchema.statics.build = (attrs: PostAttrs) => {
    return new Post(attrs);
}

export const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema);
