const ajv = require('ajv');
const { default: validation } = require('ajv/dist/vocabularies/validation');
const Ajv = new ajv();

const mw = schema => (req, res, next) => {
   const validate = Ajv.compile(schema);
   const valid = validate(req.body);

   const pattern = /^(0?[1-9]|[12][0-9]|3[01])[\-\s\/\.](0?[1-9]|1[012])[\-\s\/\.](19|20)?[0-9]{2}$/;
   strBirthday = req.body.birthday;

   const testData= pattern.test(strBirthday);
   console.log(testData);
   if (!valid){
      res.json(400,{
         errors:validation.errors
      });
      return;
   }
      next();
      console.log('data valide');
   

   if(testData !== true){
   console.log( 'invalid dataBirthdey');
   }
   const result = {status: 'invalid data', payload: validate.errors};
   res.json( result );
   res.json( {status: 'ok'} );
};

module.exports = mw;