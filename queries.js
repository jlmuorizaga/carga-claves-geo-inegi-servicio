const Pool = require("pg").Pool;

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
} = require("./conexion_data_db.js");

//Pool de conexiones a base de datos
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  /*ssl: {
    rejectUnauthorized: false,
  },*/
});

const insertaMgee = (req, res) => {
    const { cvegeo, cve_ent, nomgeo,nom_abrev, pob_total,pob_femenina,pob_masculina,total_viviendas_habitadas} = req.body;
    console.log('cve_geo=',cvegeo);console.log('cve_ent=',cve_ent),console.log('nomgeo=',nomgeo)
    console.log('nom_abrev=',nom_abrev),console.log('pob_total=',pob_total),console.log('pob_femenina=',pob_femenina)
    console.log('pob_masculina=',pob_masculina),console.log('total_viviendas_habitadas=',total_viviendas_habitadas)


    pool.query(
        "INSERT INTO public.mgee(cvegeo, cve_ent, nomgeo, nom_abrev, pob_total, pob_femenina, pob_masculina, total_viviendas_habitadas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
      [cvegeo,  cve_ent, nomgeo,nom_abrev, pob_total,pob_femenina,pob_masculina,total_viviendas_habitadas],
      (error, results) => {
        if (error) {
          throw error;
        }clearImmediate
        textoRespuesta =
          '{"respuesta": "Se insertó nuevo registro en mgee' +
          results.rows[0].cvegeo +
          '"}';
        res.status(201).json(JSON.parse(textoRespuesta));
      }
    );
  };

  module.exports = {
    insertaMgee,
  };