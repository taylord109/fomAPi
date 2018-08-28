import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/contactModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('contact', ContactSchema, 'contact');

export class ContactController {


    public addNewContact(req: Request, res: Response) {
        let newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            if (err) {
                return res.send(err);
            }
            return res.json(contact);
        });
    }


    public getContacts(req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if (err) {
                return res.send(err);
            }
            return res.json(contact);
        });
    }

    //   /lib/controllers/crmController.ts
    public getContactWithID(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                return res.send(err);
            }
            return res.json(contact);
        });
    }

    //   /lib/controllers/crmController.ts
    public updateContact(req: Request, res: Response) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                return res.send(err);
            }
            return res.json(contact);
        });
    }
}
