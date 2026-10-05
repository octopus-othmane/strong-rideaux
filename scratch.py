import os
import re
import glob

def process_directory(directory):
    files = glob.glob(directory + '/**/*.tsx', recursive=True) + glob.glob(directory + '/**/*.ts', recursive=True)
    
    # We want to find hover:property or group-hover:property
    # Added / to the character class for opacity modifiers like bg-black/50
    pattern = re.compile(r'(?<![\w\-])(group-hover|hover):([a-zA-Z0-9\-\[\]#%\./]+)')
    
    for filepath in files:
        with open(filepath, 'r') as f:
            content = f.read()
            
        original_content = content
        
        matches = list(set(pattern.findall(content)))
        
        for prefix, prop in matches:
            hover_class = f"{prefix}:{prop}"
            active_class = f"{'group-active' if prefix == 'group-hover' else 'active'}:{prop}"
            
            content = content.replace(f"{hover_class} {active_class}", hover_class)
            content = content.replace(f"{active_class} {hover_class}", hover_class)
            
            content = content.replace(hover_class, f"{hover_class} {active_class}")
            
        if content != original_content:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Updated {filepath}")

if __name__ == "__main__":
    process_directory("src/components")
    process_directory("src/app")
