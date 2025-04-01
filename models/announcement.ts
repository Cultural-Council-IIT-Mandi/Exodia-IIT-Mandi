import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String, required: true },
    imageUrl: { type: String, required: false },
    time: { type: Date, required: true },
}, { timestamps: true });

const announcement = mongoose.models.announcement || mongoose.model('announcement', announcementSchema);

export { announcement };