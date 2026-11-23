/** Opens a clean printable window (works for "Imprimir o guardar PDF"). */
export function printHtml(title: string, body: string) {
  const w = window.open("", "_blank", "width=820,height=900");
  if (!w) return false;
  w.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
<style>
  *{box-sizing:border-box} body{font-family:"Barlow",system-ui,sans-serif;color:#14213d;margin:24px;font-size:13px}
  h1,h2,h3{font-family:"Barlow Condensed","Arial Narrow",sans-serif;text-transform:uppercase;margin:0}
  h1{font-size:26px} h2{font-size:16px;margin-top:16px;padding:4px 8px;background:#14213d;color:#f5b301;display:inline-block;border-radius:4px}
  table{width:100%;border-collapse:collapse;margin-top:8px} th,td{padding:5px 6px;border-bottom:1px solid #e5e7eb;text-align:left}
  th{font-size:11px;text-transform:uppercase;color:#6b7280} .r{text-align:right} .muted{color:#6b7280}
  .head{display:flex;gap:14px;align-items:center;border-bottom:3px solid #f5b301;padding-bottom:10px}
  .head img{width:64px;height:64px;border-radius:50%} .tot{font-size:18px;font-weight:800}
  @media print{body{margin:10mm}}
</style></head><body>${body}<script>window.onload=()=>{setTimeout(()=>window.print(),300)}</script></body></html>`);
  w.document.close();
  return true;
}

export function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export function downloadCsv(filename: string, rows: (string | number)[][]) {
  const csv = rows
    .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(";"))
    .join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
