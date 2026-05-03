/*
 * Example Quantumult X script.
 * This script safely passes the response through while adding a marker field
 * when the body is valid JSON.
 */

let body = $response && $response.body;

try {
  const data = JSON.parse(body);
  data.qx_config_example = true;
  body = JSON.stringify(data);
} catch (error) {
  // Leave non-JSON responses unchanged.
}

$done({ body });

