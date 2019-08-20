const EmployeeList = ({employees}) => {
    return (
        <div>
            {employees.map(employee =>
                <div className="company" key={employee.name}>
                    <p>
                        <img src={employee.img} className="alignleft" />
                    </p>
                    {employee.position && <p><strong>{employee.position}</strong></p>}
                    {employee.name &&
                        <p>
                            <strong>{employee.name}</strong>{employee.text && <span> - {employee.text} </span>}
                        </p>
                    }
                </div>
            )}
        </div>
    );
};

export default EmployeeList;