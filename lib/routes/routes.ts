import { Request, Response } from 'express'
import { request } from 'http';
import { ContactController } from "../controllers/contactController"



export class Routes {
    public contactController: ContactController = new ContactController();

    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            return res.status(200).send({ message: 'Get Successfull !!!' });
        });

        app.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact)

        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
    }
}
