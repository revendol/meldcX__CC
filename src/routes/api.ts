import {Router} from 'express';
import fileRouter, {p as filePaths} from "@routes/file-router";


// Init
const apiRouter = Router();

// Add api routes
apiRouter.use(filePaths.basePath, fileRouter);

// **** Export default **** //

export default apiRouter;
