document.addEventListener('DOMContentLoaded', () => {
    const employeeSelect = document.getElementById('employeeSelect');
    const employeeSalary = document.getElementById('employeeSalary');
    const employeePosition = document.getElementById('employeePosition');
    const employeeLocation = document.getElementById('employeeLocation');

    fetch('empleados.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(employee => {
                const option = document.createElement('option');
                option.value = JSON.stringify(employee);
                option.textContent = employee.nombre;
                employeeSelect.appendChild(option);
            });

            // Set initial details
            const initialEmployee = JSON.parse(employeeSelect.value);
            employeeSalary.textContent = `$${initialEmployee.salario}`;
            employeePosition.textContent = initialEmployee.puesto;
            employeeLocation.textContent = initialEmployee.ubicacion;
        });

    employeeSelect.addEventListener('change', () => {
        const selectedEmployee = JSON.parse(employeeSelect.value);
        employeeSalary.textContent = `$${selectedEmployee.salario}`;
        employeePosition.textContent = selectedEmployee.puesto;
        employeeLocation.textContent = selectedEmployee.ubicacion;
    });
});
