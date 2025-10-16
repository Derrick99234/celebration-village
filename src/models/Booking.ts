import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guestCount: string;
  message: string;
  createdAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    name: String,
    email: String,
    phone: String,
    eventType: String,
    date: String,
    guestCount: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model<IBooking>("Booking", BookingSchema);
