import { useGetAllEmployeesQuery } from "../../features/employee/employeeapi";
import { useGetDepartmentsQuery } from "../../features/org/departmentApi";
import { Link, useNavigate } from "react-router-dom";
import { Users, Building2, UserPlus, ShieldCheck, BarChart3, Layers, Plus } from "lucide-react";

const panelStyle = { 
  background: '#FFFFFF', 
  border: '0.5px solid #E4E6EC', 
  borderRadius: 12, 
  padding: '16px 18px' 
};

const HRDashboard = () => {
  const navigate = useNavigate();
  const { data: employees } = useGetAllEmployeesQuery();
  const { data: departments } = useGetDepartmentsQuery();

  const stats = [
    { label: 'Total Employees', value: employees?.length || 0, accent: '#1A56DB', path: '/employees' },
    { label: 'Departments',     value: departments?.length || 0, accent: '#1A56DB', path: '/departments' },
    { label: 'Active Talent',   value: employees?.filter(e => e.id).length || 0, accent: '#27500A', path: '/employees' },
    { label: 'Appraisal Cycles',value: 'Active', accent: '#633806', path: '/appraisal' },
  ];

  const quickActions = [
    { label: 'Add New Staff',   desc: 'Register new employee', path: '/employees/new', icon: <UserPlus size={16} className="text-emerald-600" /> },
    { label: 'Assign Roles',    desc: 'Update security permissions', path: '/roles', icon: <ShieldCheck size={16} className="text-indigo-600" /> },
    { label: 'View Reports',    desc: 'Export personnel analytics', path: '/analytics', icon: <BarChart3 size={16} className="text-purple-600" /> },
    { label: 'Evaluation Criteria', desc: 'Manage score frameworks', path: '/performance-categories', icon: <Layers size={16} className="text-amber-600" /> },
  ];

  return (
    <div className="space-y-4 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 style={{ fontSize: 18, fontWeight: 500, color: '#111827' }}>HR Management</h1>
          <p style={{ fontSize: 12, color: '#9EA3B0', marginTop: 2 }}>Orchestrate organizational growth and performance intelligence.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('/employees/new')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg cursor-pointer transition-colors"
          >
            <UserPlus size={14} />
            <span>Add Staff</span>
          </button>
          <button
            onClick={() => navigate('/appraisal/create-cycle')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg cursor-pointer transition-colors"
          >
            <Plus size={14} />
            <span>New Cycle</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map(s => (
          <div 
            key={s.label} 
            onClick={() => navigate(s.path)}
            style={panelStyle}
            className="cursor-pointer hover:border-indigo-300 hover:shadow-xs transition-all group"
          >
            <div style={{ fontSize: 11, fontWeight: 500, color: '#9EA3B0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: s.accent, marginTop: 6 }} className="group-hover:scale-105 transition-transform origin-left">{s.value}</div>
            <div style={{ marginTop: 10, height: 2, width: 32, background: s.accent, borderRadius: 2 }} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Talent Changes */}
        <div style={panelStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h2 style={{ fontSize: 14, fontWeight: 500, color: '#111827' }}>Recent Talent Directory</h2>
            <button 
              onClick={() => navigate('/employees')}
              style={{ fontSize: 11, color: '#1A56DB', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}
              className="hover:underline"
            >
              See Directory →
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {employees?.slice(0, 5).map(emp => (
              <div 
                key={emp.id} 
                onClick={() => navigate(`/employees/${emp.id}/profile`)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#F5F6F8', border: '0.5px solid #E4E6EC', borderRadius: 8 }}
                className="cursor-pointer hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: '#EEF3FD', border: '0.5px solid #B5D4F4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: '#1A56DB', flexShrink: 0 }}>
                    {emp.staffName?.charAt(0) || 'E'}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: '#111827' }}>{emp.staffName}</div>
                    <div style={{ fontSize: 11, color: '#9EA3B0', marginTop: 1 }}>{emp.positionName || 'Staff Member'}</div>
                  </div>
                </div>
                <span style={{ fontSize: 11, color: '#9EA3B0', background: '#FFFFFF', border: '0.5px solid #E4E6EC', borderRadius: 6, padding: '2px 8px', fontWeight: 500 }}>
                  {emp.employeeCode || `EMP-${emp.id}`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={panelStyle}>
          <h2 style={{ fontSize: 14, fontWeight: 500, color: '#111827', marginBottom: 14 }}>HR Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickActions.map(a => (
              <button 
                key={a.label} 
                onClick={() => navigate(a.path)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '12px 14px', background: '#F5F6F8', border: '0.5px solid #E4E6EC', borderRadius: 8, cursor: 'pointer', textAlign: 'left' }}
                className="hover:border-[#1A56DB] hover:bg-[#EEF3FD] transition-colors group"
              >
                <div className="flex items-center gap-2 mb-1">
                  {a.icon}
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#111827' }} className="group-hover:text-indigo-700">{a.label}</span>
                </div>
                <span style={{ fontSize: 11, color: '#9EA3B0' }}>{a.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Appraisal Orchestration */}
      <div style={panelStyle}>
        <h2 style={{ fontSize: 14, fontWeight: 500, color: '#111827', marginBottom: 14 }}>Appraisal Orchestration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div 
            onClick={() => navigate('/appraisal/design-form')}
            style={{ padding: '14px', border: '0.5px solid #E4E6EC', borderRadius: 10, background: '#F5F6F8', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}
            className="hover:border-[#1A56DB] hover:bg-[#EEF3FD]/40 cursor-pointer transition-colors"
          >
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 500, color: '#111827', marginBottom: 4 }}>Form Frameworks</h3>
              <p style={{ fontSize: 12, color: '#9EA3B0', lineHeight: 1.5 }}>Design specialized appraisal schemas, criteria, and metric weights.</p>
            </div>
            <Link to="/appraisal/design-form" style={{ fontSize: 12, color: '#1A56DB', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
              className="hover:underline">
              Configure Systems →
            </Link>
          </div>

          <div 
            onClick={() => navigate('/appraisal')}
            style={{ padding: '14px', border: '0.5px solid #E4E6EC', borderRadius: 10, background: '#F5F6F8', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}
            className="hover:border-[#1A56DB] hover:bg-[#EEF3FD]/40 cursor-pointer transition-colors"
          >
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 500, color: '#111827', marginBottom: 4 }}>Active Review Cycles</h3>
              <p style={{ fontSize: 12, color: '#9EA3B0', lineHeight: 1.5 }}>Monitor ongoing performance evaluations, check-ins, and submissions.</p>
            </div>
            <Link to="/appraisal" style={{ fontSize: 12, color: '#1A56DB', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
              className="hover:underline">
              Monitor Live Console →
            </Link>
          </div>

          <div 
            onClick={() => navigate('/analytics')}
            style={{ padding: '14px', border: '0.5px solid #E4E6EC', borderRadius: 10, background: '#F5F6F8', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}
            className="hover:border-[#1A56DB] hover:bg-[#EEF3FD]/40 cursor-pointer transition-colors"
          >
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 500, color: '#111827', marginBottom: 4 }}>Analytical Insights</h3>
              <p style={{ fontSize: 12, color: '#9EA3B0', lineHeight: 1.5 }}>Synthesize finalized performance results into actionable talent data.</p>
            </div>
            <Link to="/analytics" style={{ fontSize: 12, color: '#1A56DB', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
              className="hover:underline">
              Open Analytics Dashboard →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
